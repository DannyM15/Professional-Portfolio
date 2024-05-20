import ResumeDL from "../ResumeLink"

export default function Resume() {
    return(
        <div>
            <h1>Resume</h1>
            <div> </div>
            <ResumeDesc /> <br/>
            <div> </div><br/><br/><br/>

            <ResumeDL />
        </div>
    )
}

function ResumeDesc() {
    return(
        `If you would like to see my work experience and all the tools I can bring, please check out my resume.
        This is a peak into the experience and skill I have so if you would like to know more I recommend reaching out to me on the contact tab.
        Thanks!`
    )
}