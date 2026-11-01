const url='https://teacher.mtlearning.tech'; const r=await fetch(url,{redirect:'follow'}); console.log(url,r.status,r.url); if(!r.ok) process.exitCode=1;
