/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './schedule.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from './schedule.component';
import * as i4 from '@angular/forms';
import * as i5 from '../auth/auth.service';
const styles_ScheduleComponent:any[] = [i0.styles];
export const RenderType_ScheduleComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_ScheduleComponent,data:{}});
function View_ScheduleComponent_5(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'span',([] as any[]),
      [[4,'color',(null as any)]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(1,(null as any),['',' ','        ']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.getStyle((((<any>_v.parent).context.$implicit == null)? (null as any): (<any>_v.parent).context.$implicit.sex));
    _ck(_v,0,0,currVal_0);
    const currVal_1:any = (((<any>_v.parent).context.$implicit == null)? (null as any): (<any>_v.parent).context.$implicit.firstName);
    const currVal_2:any = (((<any>_v.parent).context.$implicit == null)? (null as any): (<any>_v.parent).context.$implicit.lastName);
    _ck(_v,1,0,currVal_1,currVal_2);
  });
}
function View_ScheduleComponent_6(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'span',([] as any[]),
      [[4,'color',(null as any)]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(1,(null as any),['','  ']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.getStyle((((<any>_v.parent).context.$implicit == null)? (null as any): (<any>_v.parent).context.$implicit.sex));
    _ck(_v,0,0,currVal_0);
    const currVal_1:any = (_co.getAge((((<any>_v.parent).context.$implicit == null)? (null as any): (<any>_v.parent).context.$implicit.datebirth)) || ' ');
    _ck(_v,1,0,currVal_1);
  });
}
function View_ScheduleComponent_7(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'span',([] as any[]),
      [[4,'color',(null as any)]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(1,(null as any),['',' ']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.getStyle((((<any>_v.parent).context.$implicit == null)? (null as any): (<any>_v.parent).context.$implicit.sex));
    _ck(_v,0,0,currVal_0);
    const currVal_1:any = (_co.identifyCongregation((((<any>_v.parent).context.$implicit == null)? (null as any): (<any>_v.parent).context.$implicit.congregation)) || ' ');
    _ck(_v,1,0,currVal_1);
  });
}
function View_ScheduleComponent_4(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),10,'div',[['class',
      'alert alert-success'],['role','alert']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i1.ɵted(1,(null as any),['\n                                                                P ',
      ':\n                                                                 '])),(_l()(),
      i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ScheduleComponent_5)),
      i1.ɵdid(3,16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                                                                        I:  '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ScheduleComponent_6)),
      i1.ɵdid(6,16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                                                                        Cong: '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ScheduleComponent_7)),
      i1.ɵdid(9,16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),[' \n\n                                                                ']))],
      (_ck,_v) => {
        const currVal_1:any = _v.context.$implicit;
        _ck(_v,3,0,currVal_1);
        const currVal_2:any = _v.context.$implicit;
        _ck(_v,6,0,currVal_2);
        const currVal_3:any = _v.context.$implicit;
        _ck(_v,9,0,currVal_3);
      },(_ck,_v) => {
        const currVal_0:any = (_v.context.index + 1);
        _ck(_v,1,0,currVal_0);
      });
}
function View_ScheduleComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),17,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted(-1,(null as any),['    \n                        '])),(_l()(),i1.ɵeld(2,
      0,(null as any),(null as any),14,'div',[['class','col-md-4']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
      (null as any),['  \n                        '])),(_l()(),i1.ɵeld(4,0,(null as any),
      (null as any),11,'div',[['class','panel panel-default']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
      ['\n                                        \n                                        '])),
      (_l()(),i1.ɵeld(6,0,(null as any),(null as any),2,'div',[['class','panel-heading']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵeld(7,0,(null as any),(null as any),1,'strong',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(8,
          (null as any),['Ponto(','): ',''])),(_l()(),i1.ɵted(-1,(null as any),['\n                                        '])),
      (_l()(),i1.ɵeld(10,0,(null as any),(null as any),4,'div',[['class','panel-body']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                                                        '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ScheduleComponent_4)),
      i1.ɵdid(13,802816,(null as any),0,i2.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,
          i1.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted(-1,
          (null as any),[' \n                                                                '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n                                                        '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n                                                '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n                                        ']))],
      (_ck,_v) => {
        const currVal_2:any = _v.context.$implicit.pubs;
        _ck(_v,13,0,currVal_2);
      },(_ck,_v) => {
        const currVal_0:any = (_v.context.index + 1);
        const currVal_1:any = _v.context.$implicit.name;
        _ck(_v,8,0,currVal_0,currVal_1);
      });
}
function View_ScheduleComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),10,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted(-1,(null as any),['\n                        '])),(_l()(),i1.ɵeld(2,
      0,(null as any),(null as any),1,'h3',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(3,(null as any),
      ['',''])),(_l()(),i1.ɵted(-1,(null as any),['\n                        '])),
      (_l()(),i1.ɵeld(5,0,(null as any),(null as any),4,'div',[['class','row']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['     \n                        '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_ScheduleComponent_3)),i1.ɵdid(8,
          802816,(null as any),0,i2.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],
          {ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n                                '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n                        ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_1:any = _co.pontos_hora[(<any>_v.parent).context.index];
    _ck(_v,8,0,currVal_1);
  },(_ck,_v) => {
    const currVal_0:any = (<any>_v.parent).context.$implicit.hora;
    _ck(_v,3,0,currVal_0);
  });
}
function View_ScheduleComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),4,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted(-1,(null as any),['\n                                '])),(_l()(),i1.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_ScheduleComponent_2)),i1.ɵdid(3,
      16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                ']))],
      (_ck,_v) => {
        const currVal_0:any = (_v.context.$implicit.vagas > 0);
        _ck(_v,3,0,currVal_0);
      },(null as any));
}
export function View_ScheduleComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),30,'div',[['class',
      'col-md-12 col-md-offset-1']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵeld(2,
      0,(null as any),(null as any),2,'h2',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵeld(3,0,(null as any),
      (null as any),1,'span',[['class','badge badge-primary']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
      ['Escala'])),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵeld(6,
      0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
      ['\n    \n        '])),(_l()(),i1.ɵeld(8,0,(null as any),(null as any),1,'button',
      [['class','btn btn-default'],['id','anterior'],['type','button']],(null as any),
      [[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i3.ScheduleComponent = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.anteriorDia($event)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),[' < '])),(_l()(),
      i1.ɵted(-1,(null as any),['\n                        '])),(_l()(),i1.ɵeld(11,
      0,(null as any),(null as any),1,'button',[['class','btn btn-default'],['id',
          'proximo'],['type','button']],(null as any),[[(null as any),'click']],(_v,
          en,$event) => {
        var ad:boolean = true;
        var _co:i3.ScheduleComponent = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.proximoDia($event)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),[' > '])),(_l()(),
      i1.ɵted(-1,(null as any),['\n                        '])),(_l()(),i1.ɵeld(14,
      0,(null as any),(null as any),1,'label',[['for','dia']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
      ['DATA'])),(_l()(),i1.ɵted(-1,(null as any),['\n                        '])),
      (_l()(),i1.ɵeld(17,0,(null as any),(null as any),5,'input',[['id','dia'],['name',
          'dia'],['type','date']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
          (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
          [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
              (null as any)]],[[(null as any),'ngModelChange'],[(null as any),'change'],
          [(null as any),'input'],[(null as any),'blur'],[(null as any),'compositionstart'],
          [(null as any),'compositionend']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i3.ScheduleComponent = _v.component;
        if (('input' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,18)._handleInput($event.target.value)) !== false);
          ad = (pd_0 && ad);
        }
        if (('blur' === en)) {
          const pd_1:any = ((<any>i1.ɵnov(_v,18).onTouched()) !== false);
          ad = (pd_1 && ad);
        }
        if (('compositionstart' === en)) {
          const pd_2:any = ((<any>i1.ɵnov(_v,18)._compositionStart()) !== false);
          ad = (pd_2 && ad);
        }
        if (('compositionend' === en)) {
          const pd_3:any = ((<any>i1.ɵnov(_v,18)._compositionEnd($event.target.value)) !== false);
          ad = (pd_3 && ad);
        }
        if (('ngModelChange' === en)) {
          const pd_4:any = ((<any>(_co.dia = $event)) !== false);
          ad = (pd_4 && ad);
        }
        if (('change' === en)) {
          const pd_5:any = ((<any>_co.onChange()) !== false);
          ad = (pd_5 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(18,16384,(null as any),0,i4.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i4.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵprd(1024,(null as any),i4.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i4.DefaultValueAccessor]),i1.ɵdid(20,671744,(null as any),0,i4.NgModel,[[8,
          (null as any)],[8,(null as any)],[8,(null as any)],[2,i4.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},{update:'ngModelChange'}),i1.ɵprd(2048,
          (null as any),i4.NgControl,(null as any),[i4.NgModel]),i1.ɵdid(22,16384,
          (null as any),0,i4.NgControlStatus,[i4.NgControl],(null as any),(null as any)),
      (_l()(),i1.ɵted(23,(null as any),[' ','\n                        '])),(_l()(),
          i1.ɵeld(24,0,(null as any),(null as any),0,'br',([] as any[]),(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n                        '])),(_l()(),i1.ɵeld(26,0,(null as any),
          (null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n\n                        '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ScheduleComponent_1)),
      i1.ɵdid(29,802816,(null as any),0,i2.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,
          i1.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted(-1,
          (null as any),['\n                                                                ']))],
      (_ck,_v) => {
        var _co:i3.ScheduleComponent = _v.component;
        const currVal_7:any = 'dia';
        const currVal_8:any = _co.dia;
        _ck(_v,20,0,currVal_7,currVal_8);
        const currVal_10:any = _co.horas;
        _ck(_v,29,0,currVal_10);
      },(_ck,_v) => {
        var _co:i3.ScheduleComponent = _v.component;
        const currVal_0:any = i1.ɵnov(_v,22).ngClassUntouched;
        const currVal_1:any = i1.ɵnov(_v,22).ngClassTouched;
        const currVal_2:any = i1.ɵnov(_v,22).ngClassPristine;
        const currVal_3:any = i1.ɵnov(_v,22).ngClassDirty;
        const currVal_4:any = i1.ɵnov(_v,22).ngClassValid;
        const currVal_5:any = i1.ɵnov(_v,22).ngClassInvalid;
        const currVal_6:any = i1.ɵnov(_v,22).ngClassPending;
        _ck(_v,17,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
        const currVal_9:any = _co.diasemana;
        _ck(_v,23,0,currVal_9);
      });
}
export function View_ScheduleComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'app-schedule',
      ([] as any[]),(null as any),(null as any),(null as any),View_ScheduleComponent_0,
      RenderType_ScheduleComponent)),i1.ɵdid(1,114688,(null as any),0,i3.ScheduleComponent,
      [i5.AuthService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const ScheduleComponentNgFactory:i1.ComponentFactory<i3.ScheduleComponent> = i1.ɵccf('app-schedule',
    i3.ScheduleComponent,View_ScheduleComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvYWxleGEvRGVza3RvcC9ub3ZvL2NhcnJpbmhvL2Fzc2V0cy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL2FsZXhhL0Rlc2t0b3Avbm92by9jYXJyaW5oby9hc3NldHMvYXBwL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL2FsZXhhL0Rlc2t0b3Avbm92by9jYXJyaW5oby9hc3NldHMvYXBwL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvYWxleGEvRGVza3RvcC9ub3ZvL2NhcnJpbmhvL2Fzc2V0cy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LnRzLlNjaGVkdWxlQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjb2wtbWQtb2Zmc2V0LTFcIj5cclxuICAgICAgICA8aDI+PHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+RXNjYWxhPC9zcGFuPjwvaDI+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJhbnRlcmlvclwiIChjbGljayk9XCJhbnRlcmlvckRpYSgkZXZlbnQpXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj4gPCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJwcm94aW1vXCIgKGNsaWNrKT1cInByb3hpbW9EaWEoJGV2ZW50KVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+ID4gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkaWFcIj5EQVRBPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJkaWFcIiBpZD1cImRpYVwiIHR5cGU9XCJkYXRlXCIgWyhuZ01vZGVsKV09XCJkaWFcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKClcIj4ge3sgZGlhc2VtYW5hIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaG9yYSBvZiBob3JhczsgbGV0IGggPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJob3JhLnZhZ2FzID4gMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3tob3JhLmhvcmF9fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBwb250byBvZiBwb250b3NfaG9yYVtoXTsgbGV0IGkgPSBpbmRleFwiPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCIgPjxzdHJvbmc+UG9udG8oe3tpICsgMX19KToge3twb250by5uYW1lfX08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgcHViIG9mIHBvbnRvLnB1YnM7IGxldCBqID0gaW5kZXhcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAge3sgaiArIDEgfX06XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gIFtzdHlsZS5jb2xvcl09XCJnZXRTdHlsZShwdWI/LnNleClcIiAqbmdJZj1cInB1YlwiPnt7IHB1Yj8uZmlyc3ROYW1lIH19IHt7IHB1Yj8ubGFzdE5hbWV9fSAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJOiAgPHNwYW4gW3N0eWxlLmNvbG9yXT1cImdldFN0eWxlKHB1Yj8uc2V4KVwiICpuZ0lmPVwicHViXCI+e3sgZ2V0QWdlKHB1Yj8uZGF0ZWJpcnRoKSB8fCAnICcgfX0gIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZzogPHNwYW4gIFtzdHlsZS5jb2xvcl09XCJnZXRTdHlsZShwdWI/LnNleClcIiAqbmdJZj1cInB1YlwiPnt7IGlkZW50aWZ5Q29uZ3JlZ2F0aW9uKHB1Yj8uY29uZ3JlZ2F0aW9uKSB8fCAnICcgfX0gPC9zcGFuPiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiAqbmdJZj1cIm15dXNlcnZhbGlkKGksailcIiA+e3sgZXNjYWxhMVtpXS51c2VyW2pdLmZpcnN0bmFtZSB9fTwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG48IS0tIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pi8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4xMjowMC0xNTowMDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgKm5nRm9yPVwibGV0IHBvbnRvIG9mIHBvbnRvczsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIiA+UG9udG8oe3tpICsgMX19KToge3twb250by5uYW1lfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgbnVtYmVyIG9mIHBvbnRvLnB1YnM7IGxldCBqID0gaW5kZXhcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUCB7eyBqICsgMSB9fTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gIFtzdHlsZS5jb2xvcl09XCJnZXRTdHlsZShlc2NhbGEyW2ldPy51c2VyW2pdLnNleClcIiAqbmdJZj1cImVzY2FsYTJbaV0/LnVzZXJbal1cIj57eyBlc2NhbGEyW2ldPy51c2VyW2pdPy5maXJzdE5hbWUgfX0ge3sgZXNjYWxhMltpXT8udXNlcltqXT8ubGFzdE5hbWV9fSAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJOiAgPHNwYW4gW3N0eWxlLmNvbG9yXT1cImdldFN0eWxlKGVzY2FsYTJbaV0/LnVzZXJbal0uc2V4KVwiICpuZ0lmPVwiZXNjYWxhMltpXT8udXNlcltqXVwiPnt7IHRoaXMuZ2V0QWdlKGVzY2FsYTJbaV0/LnVzZXJbal0/LmRhdGViaXJ0aCkgfX0gIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZzogPHNwYW4gIFtzdHlsZS5jb2xvcl09XCJnZXRTdHlsZShlc2NhbGEyW2ldPy51c2VyW2pdLnNleClcIiAqbmdJZj1cImVzY2FsYTJbaV0/LnVzZXJbal1cIj57eyBlc2NhbGEyW2ldPy51c2VyW2pdPy5jb25ncmVnYXRpb24gfX0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTVcIj4gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImhvdXIzVmFsaWQoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+MTU6MDAtMTg6MDA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiICpuZ0Zvcj1cImxldCBwb250byBvZiBwb250b3M7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCIgPlBvbnRvKHt7aSArIDF9fSk6IHt7cG9udG8ubmFtZX19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IG51bWJlciBvZiBwb250by5wdWJzOyBsZXQgaiA9IGluZGV4XCIgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAge3sgaiArIDEgfX06XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICBbc3R5bGUuY29sb3JdPVwiZ2V0U3R5bGUoZXNjYWxhM1tpXT8udXNlcltqXS5zZXgpXCIgKm5nSWY9XCJlc2NhbGEzW2ldPy51c2VyW2pdXCI+e3sgZXNjYWxhM1tpXT8udXNlcltqXT8uZmlyc3ROYW1lIH19IHt7IGVzY2FsYTNbaV0/LnVzZXJbal0/Lmxhc3ROYW1lfX0gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSTogIDxzcGFuIFtzdHlsZS5jb2xvcl09XCJnZXRTdHlsZShlc2NhbGEzW2ldPy51c2VyW2pdLnNleClcIiAqbmdJZj1cImVzY2FsYTNbaV0/LnVzZXJbal1cIj57eyB0aGlzLmdldEFnZShlc2NhbGEzW2ldPy51c2VyW2pdPy5kYXRlYmlydGgpIH19ICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmc6IDxzcGFuICBbc3R5bGUuY29sb3JdPVwiZ2V0U3R5bGUoZXNjYWxhM1tpXT8udXNlcltqXS5zZXgpXCIgKm5nSWY9XCJlc2NhbGEzW2ldPy51c2VyW2pdXCI+e3sgZXNjYWxhM1tpXT8udXNlcltqXT8uY29uZ3JlZ2F0aW9uIH19IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImhvdXI0VmFsaWQoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+MTk6MDAtMjE6MzA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiICpuZ0Zvcj1cImxldCBwb250byBvZiBwb250b3M7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCIgPlBvbnRvKHt7aSArIDF9fSk6IHt7cG9udG8ubmFtZX19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IG51bWJlciBvZiBwb250by5wdWJzOyBsZXQgaiA9IGluZGV4XCIgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAge3sgaiArIDEgfX06XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICBbc3R5bGUuY29sb3JdPVwiZ2V0U3R5bGUoZXNjYWxhNFtpXT8udXNlcltqXS5zZXgpXCIgKm5nSWY9XCJlc2NhbGE0W2ldPy51c2VyW2pdXCI+e3sgZXNjYWxhNFtpXT8udXNlcltqXT8uZmlyc3ROYW1lIH19IHt7IGVzY2FsYTRbaV0/LnVzZXJbal0/Lmxhc3ROYW1lfX0gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSTogIDxzcGFuIFtzdHlsZS5jb2xvcl09XCJnZXRTdHlsZShlc2NhbGE0W2ldPy51c2VyW2pdLnNleClcIiAqbmdJZj1cImVzY2FsYTRbaV0/LnVzZXJbal1cIj57eyB0aGlzLmdldEFnZShlc2NhbGE0W2ldPy51c2VyW2pdPy5kYXRlYmlydGgpIH19ICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmc6IDxzcGFuICBbc3R5bGUuY29sb3JdPVwiZ2V0U3R5bGUoZXNjYWxhNFtpXT8udXNlcltqXS5zZXgpXCIgKm5nSWY9XCJlc2NhbGE0W2ldPy51c2VyW2pdXCI+e3sgZXNjYWxhNFtpXT8udXNlcltqXT8uY29uZ3JlZ2F0aW9uIH19IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHVzZXJkYXkgb2YgdXNlcmRheXM7IGxldCBpID0gaW5kZXhcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicmVtb3ZlIGdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlLXNpZ24gZ2x5cGhpY29uLXdoaXRlXCIgKGNsaWNrKT1cIkRlbGV0ZShpKVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+QWdlbmRhZG8ge3sgYWdlbmRhLmRpYXNlbWFuYSB9fSB7eyBhZ2VuZGEuZGF0YXNob3cgfX0gw6FzIHt7IGFnZW5kYS5ob3JhIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT4iLCI8YXBwLXNjaGVk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
