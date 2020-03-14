import './style.css';
import moment from 'moment';

const myFormat: string = 'DD/MM/YYYY HH:mm';

const a = moment();
const b = moment();

const result = a < b;

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>MomentJs Playground - ${moment().format(myFormat)}</h1><br>
                    <p>A: ${a.format(myFormat)}</p>
                    <p>B: ${b.format(myFormat)}</p>
                    <p>Result: ${result}</p>`;