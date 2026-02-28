import {
  ChangeDetectionStrategy,
  Component,
  signal,
  input
} from '@angular/core';

const COPY_TEXT = 'Copy To Clipboard';
const COPIED_TEXT = '✓ Copied!';

@Component({
    selector: 'sp-copy-to-clipboard',
    templateUrl: './copy-to-clipboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: []
})
export class CopyToClipboardComponent {
  readonly sourceElement = input.required<HTMLElement>();
  text = signal(COPY_TEXT);

  copyText(): void {
    navigator.clipboard.writeText(this.sourceElement().innerText);
    this.text.set(COPIED_TEXT);
    setTimeout(() => this.text.set(COPY_TEXT), 2000);
  }
}
