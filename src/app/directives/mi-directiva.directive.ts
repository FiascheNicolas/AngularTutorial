import { Directive,ElementRef,Input,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[MiDirectiva]'
})
export class MiDirectivaDirective {

  constructor(
    public el: ElementRef,
    public renderer: Renderer2
  ) { }

    @Input() MiDirectiva:boolean

    //* */
    @Input() color:string
    @Input() underline:boolean


    @HostListener('mouseenter') onMouseEnter(){
      this.hover(true)
    }
    @HostListener('mouseleave') onMouseLeave(){
      this.hover(false)
    }

    hover(color:boolean): void{
      if(color){
        this.renderer.setStyle(this.el.nativeElement, 'color', "red")
      }else{
        this.renderer.setStyle(this.el.nativeElement, 'color',"")
      }
    }

    ngOnInit(){
      // this.renderer.setStyle(this.el.nativeElement, 'color', this.color)
      // this.renderer.setStyle(this.el.nativeElement, 'text-decoration', this.underline ? 'underline' : '')

      //2 formas equivalentes de hacer lo mismo.

      this.el.nativeElement.style.color = this.color
      this.el.nativeElement.style.textDecoration = this.underline ? 'underline' : ''
    }
    
    //*****************/
    //Usado como primer ejemplo basico. Cuando termina de cargar la pagina, se setea el color de la directiva. 
    //<span MiDirectiva>{{title}}</span>
    // ngOnInit(){
    //   if(this.MiDirectiva) this.renderer.setStyle(this.el.nativeElement, 'color', "red")
    // }

}
