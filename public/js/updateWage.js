const minTotal = document.getElementById('minute-total');
const hrTotal = document.getElementById('hour-total');
const earned = document.getElementById('earned-wage');
const saveTimeBtn = document.getElementById('save-time');

function runSave(event) {
    event.preventDefault();

    let minutes = minTotal.innerHTML;
    let m = (Math.round(minutes/15) * 15) % 60;
    let newM = m/100;

    const totalWage = earned.innerHTML;
    let hrs = hrTotal.innerHTML;
    const totalTime = hrs += newM;

    return saveTime(totalWage, totalTime);
}

async function saveTime(totalWage, totalTime) {
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
    if (id && totalWage && totalTime) {
        const response = await fetch(`/api/projects/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                project_id: id,
                wage: totalWage,
                time: totalTime
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log(response);
        if (response.ok) {
            document.location.replace(`/project/${id}`);
            alert("Successfully updated this project's time and wage log");
        } else {
            alert('Failed to save time to database');
        }
    };
};
  
saveTimeBtn.addEventListener('click', runSave);