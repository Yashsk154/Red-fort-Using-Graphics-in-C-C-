import { LightningElement, track } from 'lwc';

export default class BlinkingText extends LightningElement {
    @track currentText = 'Salesforce Developer';

    roles = [
        'Salesforce Developer',
        'Android Developer',
        'Flutter Developer',
        'Java Developer'
    ];

    index = 0;

    connectedCallback() {
        this.startBlinking();
    }

    startBlinking() {
        setInterval(() => {
            this.index = (this.index + 1) % this.roles.length;
            this.currentText = this.roles[this.index];
        }, 2000); // Change text every 2 seconds
    }
}
