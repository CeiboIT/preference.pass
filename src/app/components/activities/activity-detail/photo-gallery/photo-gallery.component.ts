import { Component, OnInit, Input } from '@angular/core';
import { compress, resize } from '../../../../constants/filestack';

declare var PhotoSwipe;
declare var PhotoSwipeUI_Default;
@Component({
	selector: 'app-photo-gallery',
	template:
		`
			<img [src]="resizeImg(mainPhoto?.url, 650, 650)" (click)="openGallery(0)">
			<md-card>
				<ul class="sub-photos" *ngIf="subPhotos">
					<div class="item" *ngFor="let subPhoto of subPhotos; let i = index">
						<li>
							<a (click)="openGallery(i + 1)">
								<img [src]="resizeImg(subPhoto?.url, 90, 70)">
							</a>
						</li>
					</div>
				</ul>
			</md-card>
		`,
  styleUrls: ['./photo-gallery.component.css']
})

export class PhotoGalleryComponent implements OnInit {
	@Input() mainPhoto;
	@Input() subPhotos;
	public totalSubPhotosToDisplay: Number = 5;
  	private gallery: any;
	constructor() { }
  ngOnInit() { }
  getItems() {
		var items = [];
		items.push({
			src: this.mainPhoto.url,
			w: 300,
			h: 300,
			doGetSlideDimensions: true
		})
		this.subPhotos.map((subPhoto) => {
			var src = compress(subPhoto.url);

			items.push({
				src: src,
				w: 300,
				h: 300,
				doGetSlideDimensions: true
			})
		});

		return items
	}

	resizeImg(url, w, h) {
		return resize(url, w, h);
	}

  openGallery(index) {

    const _index = index;

    var pswpElement = document.querySelectorAll('.pswp')[0];
    this.gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, this.getItems(), { index: index });

    this.gallery.init();

    this.gallery.listen("gettingData", (_index, slide) => {

      if (slide.doGetSlideDimensions) {

        setTimeout(
          // use setTimeout so that it runs in the event loop
          () => { this.getSlideDimensions(slide); }
          , 300
        );
      }
    });

    this.gallery.listen("imageLoadComplete", (_index, slide) => {
      if (slide.doGetSlideDimensions)
        this.getSlideDimensions(slide);
    });

  }

  getSlideDimensions(slide) {

    if (!slide.doGetSlideDimensions)
      return;

    var img = new Image();

    img.onload = () => {

      slide.doGetSlideDimensions = false;

      slide.w = img.naturalWidth;
      slide.h = img.naturalHeight;

      this.gallery.invalidateCurrItems();
      this.gallery.updateSize(true);
    };

    img.src = slide.src;
  }
}
