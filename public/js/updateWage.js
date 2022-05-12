const minTotal = document.getElementById('minute-total');
const hrTotal = document.getElementById('hour-total');
const secTotal = document.getElementById('second-total');
const earned = document.getElementById('earned-wage');
const saveTimeBtn = document.getElementById('save-time');

async function saveTime(event) {

    event.preventDefault();

    // let minutes = minTotal.innerHTML;
    // let m = (Math.round(minutes/15) * 15) % 60;
    // let newM = m/100;

    const totalWage = earned.innerHTML;
    const totalHour = hrTotal.innerHTML;
    const totalMinute = minTotal.innerHTML;
    const totalSecond = secTotal.innerHTML;

    // let hrs = hrTotal.innerHTML;
    // const totalTime = hrs += newM;

    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
    if (id && totalWage && totalHour && totalMinute && totalSecond) {
        const response = await fetch(`/api/projects/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                project_id: id,
                wage: totalWage,
                hr: totalHour,
                min: totalMinute,
                sec: totalSecond
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
  
saveTimeBtn.addEventListener('click', saveTime);