import './style.css';

import moment from 'moment'

const now = moment();

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>TypeScript Starter</h1>

Today: ${now.format()} <br>
ISO Weekday: ${now.isoWeekday()}
`;

