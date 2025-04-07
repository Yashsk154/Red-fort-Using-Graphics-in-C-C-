import { LightningElement } from 'lwc';
import profileImage from '@salesforce/resourceUrl/profileimage';

export default class HomePortfolio extends LightningElement {
    name = "Yash Kaulwar"; 
    title = "Cloud Apps Engineer | Salesforce Developer";
    description = "I am a Salesforce-certified developer with experience in LWC, Apex, and Experience Cloud.";
    profileImg = profileImage; 
}
