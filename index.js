const countdown = () => {
    const countDate = new Date('Feb 18, 2022 15:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute *60;
    const day = hour*24;

    const textDay = Math.floor(gap/day);
    const textHour = Math.floor(gap % day / hour);
    const textMinute = Math.floor(gap % hour / minute);
    const textSecond = Math.floor(gap % minute / second);
    document.querySelector(".day").innerText=textDay;
    document.querySelector(".hour").innerText=textHour;
    document.querySelector(".minute").innerText=textMinute;
    document.querySelector(".second").innerText=textSecond;
    
};


const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 30);
setInterval(countdown,1000);

function sendMail(params){
    var tempParams= {
        user_name:document.getElementById("name").value,
        user_subj:document.getElementById("subj").value,
        user_email:document.getElementById("email").value,
        message:document.getElementById("message").value
    };
    emailjs.send('service_y66vpvr','template_ba0apmq',tempParams).then(function(res){
        console.log(res.status);
        if(res.status == 200){
            document.getElementById("response").innerText="Message Sent";
        }
    })
}