import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
} from '@angular/core';
import { timer } from 'rxjs';

const COPY_TEXT = 'Copy To Clipboard';
const COPIED_TEXT = '✓ Copied!';

@Component({
    selector: 'sp-copy-to-clipboard',
    templateUrl: './copy-to-clipboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: []
})
export class CopyToClipboardComponent {
  @Input() sourceElement!: HTMLElement;
  text: string = COPY_TEXT;

  private readonly changeDetector: ChangeDetectorRef =
    inject(ChangeDetectorRef);

  copyText(): void {
    navigator.clipboard.writeText(this.sourceElement.innerText);
    this.text = COPIED_TEXT;
    timer(2000).subscribe(() => {
      this.text = COPY_TEXT;
      this.changeDetector.detectChanges();
    });
  }
}
