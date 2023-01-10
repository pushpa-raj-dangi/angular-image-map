import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
interface Coordinates {
  left: number;
  top: number;
  title: string;
  content: string;
  plot: number;
  image: string;
}
@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements AfterViewInit {
  @ViewChild('myIdentifier')
  myIdentifier!: ElementRef;
  x: number = 0;
  y: number = 0;
  coordinates: Coordinates[] = [
    {
      left: 744,
      top: 173,
      title: 'babal proeprty in this area',
      content: 'babal proeprty in this area',
      plot: 4,
      image: 'https://picsum.photos/200/300',
    },
    {
      left: 1016,
      top: 173,
      title: 'babal proeprty in this area',
      content: 'babal proeprty in this area',
      plot: 4,
      image: 'https://picsum.photos/200/300',
    },
    {
      left: 891,
      top: 139,
      title: 'babal proeprty in this area',
      content: 'babal proeprty in this area',
      plot: 4,
      image: 'https://picsum.photos/200/300',
    },
    {
      left: 662,
      top: 99,
      title: 'babal proeprty in this area',
      content: 'babal proeprty in this area',
      plot: 4,
      image: 'https://picsum.photos/200/300',
    },
    {
      left: 583,
      top: 177,
      title: 'babal proeprty in this area',
      content: 'babal proeprty in this area',
      plot: 4,
      image: 'https://picsum.photos/200/300',
    },
    {
      left: 716,
      top: 259,
      title: 'babal proeprty in this area',
      content: 'babal proeprty in this area',
      plot: 4,
      image: 'https://picsum.photos/200/300',
    },
    {
      left: 982,
      top: 307,
      title: 'babal proeprty in this area',
      content: 'babal proeprty in this area',
      plot: 4,
      image: 'https://picsum.photos/200/300',
    },
    {
      left: 1158,
      top: 245,
      title: 'babal proeprty in this area',
      content: 'babal proeprty in this area',
      plot: 4,
      image: 'https://picsum.photos/200/300',
    },
    {
      left: 1172,
      top: 136,
      title: 'babal proeprty in this area',
      content: 'babal proeprty in this area',
      plot: 4,
      image: 'https://picsum.photos/200/300',
    },
    {
      left: 1027,
      top: 105,
      title: 'babal proeprty in this area',
      content: 'babal proeprty in this area',
      plot: 4,
      image: 'https://picsum.photos/200/300',
    },
    {
      left: 930,
      top: 99,
      title: 'babal proeprty in this area',
      content: 'babal proeprty in this area',
      plot: 4,
      image: 'https://picsum.photos/200/300',
    },
  ];
  getXAndY(event: any) {
    console.log(this.coordinates);

    this.x =
      event.clientX - this.myIdentifier.nativeElement.getBoundingClientRect().x;
    this.y =
      event.clientY - this.myIdentifier.nativeElement.getBoundingClientRect().y;

    this.myIdentifier.nativeElement.insertAdjacentHTML(
      'beforeend',
      `<div style="
      left:${this.x}px;
      top:${this.y}px"
       class="circle"></div>
       `
    );

    this.coordinates.push({
      left: event.clientX,
      top: event.clientY,
      title: 'babal proeprty in this area',
      content: 'babal proeprty in this area',
      plot: 4,
      image: 'https://picsum.photos/200/300',
    });
  }

  ngAfterViewInit(): void {
    let x = this.myIdentifier.nativeElement.getBoundingClientRect().width;
    let y = this.myIdentifier.nativeElement.getBoundingClientRect().height;

    this.coordinates.forEach((coordinate) => {
      this.myIdentifier.nativeElement.insertAdjacentHTML(
        'beforeend',
        `<div style="
        left:${x - coordinate.left}px;
        top:${y - coordinate.top}px"
          class="circle">
                    <div style="right:0;" class="bg-light shadow-sm d-flex flex-column p-4 w-100 d-none">
                    <h5 class="shadow-lg p-3 text-black">${
                      coordinate.title
                    }</h5>
                    <img style="height:200px;object-fit:cover" class='rounded-3' src=${
                      coordinate.image
                    } />
                    <p class=" text-black">${coordinate.content}</p>
                    <span class="btn btn-success btn-sm ">View Details</span>



                    </div>
          </div>

          `
      );
    });
  }
}
