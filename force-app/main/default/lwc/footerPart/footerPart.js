import { LightningElement } from 'lwc';
import linkedinIcon from '@salesforce/resourceUrl/linkedin';
import githubIcon from '@salesforce/resourceUrl/github';
import instagramIcon from '@salesforce/resourceUrl/Instagram';
import emailIcon from '@salesforce/resourceUrl/gmail';

export default class FooterPart extends LightningElement {
     linkedinIc = linkedinIcon;
    githubIc = githubIcon;
    instagramIc = instagramIcon;
    emailIc = emailIcon;


    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
