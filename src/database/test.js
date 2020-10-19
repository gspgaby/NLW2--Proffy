const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    //Inserir dados
    proffyValue = {
        name: "Gabriella dos Santos Pereira", 
        avatar: "https://avatars2.githubusercontent.com/u/61751324?s=60&v=4", 
        whatsapp: "98456545262",
        bio: "Entusiasta das melhores tecnologias.<br><br>Apaixonada pela lógica Matemática e todas as suas aplicações.",
    }

    classValue = {
        subject: "7",
        cost:"35",    
        //proffy_id virá do banco de dados     
    }

    classScheduleValues = [
        // class_id virá do banco de dados, após cadastrarmos a aula
        {
            weekday: 1, 
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues })

    // Consultar os dados inseridos 
    
    // consultar todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // consultar as classes de um determinado proffy
    // e trazer junto os dados do proffy
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8 as 18
    // o horário do time_from 8h precisa ser menor ou igual ao horário solicitado
    // o time_to precisa ser maior que
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    // console.log(selectClassesSchedules)

})