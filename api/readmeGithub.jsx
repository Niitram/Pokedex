
const techSkills = {
    frontend: {
        code: ["React", "Javascript", "CSS", "HTML", "Wordpress"], 
        styles: ["Bootstrap", "SASS", "Styled Component", "Tailwindcss"],
    },
    backend: {
        databases: ["SQL", "Sequelize", "PostgreSQL"],
    },
    tools: {
        codeEditor: ["Visual Studio Code", "Git Bash"],
    }
}

function Working(){
    return (<Marto techSkills={techSkills}/>)
} 


