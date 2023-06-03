const radhaNam = [
  {
    'name': "गोपीश्वर महादेव",
  },
  {
    'name': "श्री बाँके बिहारी",
  },
  {
    'name': "श्री नेह बिहारी",
  },
  {
    'name': "मदन मोहन जी",
  },
  {
    'name': "गोपीनाथ जी",
  },
  {
    'name': "राधा दामोदर",
  },
  {
    'name': "राधा बिनोद जी",
  },
  {
    'name': "साक्षी गोपाल जी",
  },
  {
    'name': "राधा माधव जी",
  },
  {
    'name': "श्री राधा बल्लव जी",
  },
  {
    'name': "श्री युगल किशोर जी",
  },
  {
    'name': "श्री राधा रमण जी",
  },
  {
    'name': "अष्टसखी जी",
  },
  {
    'name': "अटल बन में",
  },
  {
    'name': "बिहार बन में",
  },
  {
    'name': "गौचारण बन में",
  },
  {
    'name': "गोपाल बन में",
  },
  {
    'name': "वेणुकूप पे",
  },
  {
    'name': "दावानल कुंड पे",
  },
  {
    'name': "बनखंडी महादेव",
  },
  {
    'name': "श्री निकुंज बन में",
  },
  {
    'name': "राधाबन में",
  },
  {
    'name': "झूलन बन में",
  },
  {
    'name': "वेणुकूप पे",
  },
  {
    'name': "दावानल कुण्ड पे",
  },
  {
    'name': "वलत्ठी महादेव",
  },
  {
    'name': "सुर्यघाट पे",
  },
];
let line1 = document.querySelector(".line-1");
let line2 = document.querySelector(".line-2");

const func = ()=>{
    let random = Math.floor(Math.random() * radhaNam.length + 1);
    console.log(random)
    line1.innerHTML = radhaNam[random].name + ',';
}
setInterval(func,8000)

