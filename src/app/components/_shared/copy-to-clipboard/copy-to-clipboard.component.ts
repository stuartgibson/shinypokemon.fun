import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { timer } from 'rxjs';

const COPY_TEXT = "Copy To Clipboard";
const COPIED_TEXT = "✓ Copied!";

@Component({
    selector: 'sp-copy-to-clipboard',
    templateUrl: './copy-to-clipboard.component.html',
    styleUrls: ['./copy-to-clipboard.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: []
})
export class CopyToClipboardComponent {
  @Input() sourceElement!:HTMLElement;
  text : string = COPY_TEXT;

  constructor(private changeDetector: ChangeDetectorRef){}

  onClick():void {
    navigator.clipboard.writeText(this.sourceElement.innerText);
    this.text = COPIED_TEXT;
    timer(2000).subscribe(() => {
      this.text = COPY_TEXT;
      this.changeDetector.detectChanges();
    });
  }
}
