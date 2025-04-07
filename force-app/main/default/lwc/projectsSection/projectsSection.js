import { LightningElement } from 'lwc';

export default class ProjectsSection extends LightningElement {
    projects = [
        { id: 1, title: "Customer Support Management", description: "Automated ticketing system with task assignment using Salesforce." },
        { id: 2, title: "News App with Salesforce", description: "Real-time news fetching and categorization using Salesforce APIs." },
        { id: 3, title: "Video Downloader App", description: "Multi-platform video downloader with high-speed processing." },
        { id: 4, title: "Well-being Shiksha", description: "Education platform for underprivileged students with interactive courses." }
    ];
}
