import NutsAbout from '../assets/nutsabout.png'
export const AboutPage = () => {
    return (
        <div>
            <h1>What does the Task Manager App do?</h1>
            <p>
            <li>The Task Manager App is a simple To-do app allowing the user to create and manage tasks, as well as check off (or uncheck) the existing tasks when completed.</li>
            <li>Made by student: RMT_PT_20-02-24_Michael_Nguyen</li>
            <li><a href="https://github.com/mikkelng">GitHub profile</a></li>
            </p>
            <img src={NutsAbout} alt="nuts" style={{ height: '500px' }} />
        </div>
    )
}