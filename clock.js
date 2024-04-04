/*MIT License

Copyright (c) 2024 Masumi Shirakawa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

window.addEventListener('load', () => {
  const clock = document.getElementById('clock');

  const parseOffset = (offsetStr) => {
    const match = offsetStr.match(/^([+-])(\d{2}):(\d{2})$/);
    if (!match) {
      return 0;
    }
    const sign = match[1] === '+' ? 1 : -1;
    const hours = parseInt(match[2], 10);
    const minutes = parseInt(match[3], 10);
    return sign * (hours * 60 + minutes);
  }

  const offsetStr = clock.getAttribute('offset');
  let offset = 0;
  if (offsetStr !== null) {
    offset = parseOffset(offsetStr);
  }
  const useSecondStr = clock.getAttribute('second');
  let useSecond = false;
  if (useSecondStr === 'true') {
    useSecond = true;
  }

  clock.style.position = 'relative';
  clock.style.width = '100%';
  clock.style.paddingTop = '100%';
  clock.style.background = 'url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22a%22%20x1%3D%221.489%25%22%20x2%3D%22100%25%22%20y1%3D%221.489%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23606060%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23A0A0A0%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22c%22%20x1%3D%220%25%22%20x2%3D%2296.69%25%22%20y1%3D%220%25%22%20y2%3D%2296.69%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23FFF%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23F0F0F0%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22b%22%20x1%3D%220%25%22%20x2%3D%22100%25%22%20y1%3D%220%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23E0E0E0%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23FFF%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%22100%22%20r%3D%2298%22%20stroke%3D%22url(%23a)%22%20stroke-width%3D%224%22%2F%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%22100%22%20r%3D%2294%22%20fill%3D%22url(%23c)%22%20stroke%3D%22url(%23b)%22%20stroke-width%3D%224%22%2F%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%22100%22%20r%3D%226%22%20fill%3D%22%23333%22%2F%3E%3Cpath%20fill%3D%22%23333%22%20fill-rule%3D%22nonzero%22%20d%3D%22M96.416%2033v-1.092h-1.54c-1.083-.112-1.624-.663-1.624-1.652V12.812h-2.408c-.71.653-1.465%201.092-2.268%201.316-.803.093-1.68.168-2.632.224v1.092h1.848c.952%200%201.428.541%201.428%201.624v13.188c-.112.448-.261.812-.448%201.092a2.178%202.178%200%200%201-1.204.56h-1.512V33h10.36Zm18.312%200%201.204-6.216h-.98c-.392.896-.793%201.587-1.204%202.072-.672.579-1.577.868-2.716.868h-7.084c.747-1.25%202.417-2.67%205.012-4.256a197.152%20197.152%200%200%201%202.94-1.848%2011.593%2011.593%200%200%200%202.408-2.072c.672-.99.999-2.007.98-3.052-.056-1.661-.672-3.08-1.848-4.256-1.419-1.157-3.127-1.736-5.124-1.736-1.792%200-3.332.504-4.62%201.512-1.288%201.027-1.932%202.156-1.932%203.388%200%201.325.728%202.053%202.184%202.184.485-.056.961-.243%201.428-.56.355-.41.532-.877.532-1.4%200-.448-.177-.896-.532-1.344-.373-.448-.56-.765-.56-.952%200-.336.252-.7.756-1.092.579-.355%201.27-.532%202.072-.532%202.333%200%203.5%201.307%203.5%203.92-.019%201.27-.383%202.576-1.092%203.92-.747%201.008-1.652%202.025-2.716%203.052-2.781%202.632-4.601%204.667-5.46%206.104V33h12.852ZM179.258%20110.308c2.427%200%204.321-.504%205.684-1.512%201.363-1.008%202.044-2.352%202.044-4.032%200-3.36-2.175-5.217-6.524-5.572%201.923-.28%203.379-.71%204.368-1.288.99-.84%201.53-2.007%201.624-3.5-.093-1.55-.747-2.744-1.96-3.584-1.288-.877-2.81-1.316-4.564-1.316-1.885%200-3.407.43-4.564%201.288-1.176.877-1.764%201.904-1.764%203.08%200%20.672.177%201.213.532%201.624.373.43.887.644%201.54.644.541%200%201.017-.187%201.428-.56.43-.392.644-.859.644-1.4%200-.523-.187-.952-.56-1.288-.28-.392-.42-.653-.42-.784%200-.504.308-.877.924-1.12.448-.187.97-.28%201.568-.28%202.184%200%203.276%201.307%203.276%203.92%200%202.688-1.195%204.032-3.584%204.032h-1.988v1.092h1.988c2.613%200%203.92%201.67%203.92%205.012%200%202.93-1.167%204.415-3.5%204.452-.952.019-1.717-.121-2.296-.42-.504-.336-.756-.7-.756-1.092%200-.28.14-.635.42-1.064.299-.43.448-.877.448-1.344%200-.523-.177-.99-.532-1.4-.448-.373-.924-.56-1.428-.56-.653%200-1.176.205-1.568.616-.41.41-.616.933-.616%201.568%200%201.624.653%202.856%201.96%203.696%201.12.728%202.539%201.092%204.256%201.092ZM99.958%20187.308c2.296%200%204.144-.69%205.544-2.072%201.307-1.288%201.96-2.884%201.96-4.788%200-2.09-.57-3.715-1.708-4.872-1.157-1.176-2.697-1.764-4.62-1.764-1.773%200-3.332.756-4.676%202.268.056-2.464.467-4.47%201.232-6.02.765-1.568%201.885-2.352%203.36-2.352.336%200%20.69.084%201.064.252.448.205.672.448.672.728a1.8%201.8%200%200%201-.112.532c-.075.15-.112.373-.112.672%200%20.504.177.924.532%201.26.355.336.793.532%201.316.588.597-.056%201.11-.243%201.54-.56.299-.41.439-.84.42-1.288-.037-.915-.504-1.68-1.4-2.296-1.064-.728-2.408-1.092-4.032-1.092-2.408%200-4.405%201.055-5.992%203.164-1.605%202.128-2.408%204.667-2.408%207.616%200%203.21.653%205.684%201.96%207.42%201.307%201.736%203.127%202.604%205.46%202.604Zm.112-1.092c-1.176%200-2.053-.69-2.632-2.072-.653-1.55-.98-3.836-.98-6.86%201.419-1.53%202.65-2.296%203.696-2.296%201.139%200%201.988.625%202.548%201.876.43.97.635%202.09.616%203.36-.037%203.995-1.12%205.992-3.248%205.992ZM19.09%20110.308c2.464-.037%204.499-1.13%206.104-3.276%201.53-2.035%202.287-4.499%202.268-7.392-.019-3.173-.681-5.656-1.988-7.448-1.307-1.792-3.108-2.688-5.404-2.688s-4.153.69-5.572%202.072c-1.307%201.288-1.96%202.884-1.96%204.788%200%202.09.57%203.715%201.708%204.872%201.157%201.176%202.697%201.764%204.62%201.764%201.643%200%203.164-.719%204.564-2.156-.093%202.576-.495%204.573-1.204%205.992-.784%201.55-1.867%202.343-3.248%202.38-.56.019-.999-.121-1.316-.42-.299-.224-.448-.41-.448-.56%200-.205.037-.383.112-.532.075-.224.112-.448.112-.672%200-.504-.14-.933-.42-1.288-.43-.448-.905-.672-1.428-.672-.71%200-1.213.224-1.512.672-.299.299-.448.728-.448%201.288%200%201.083.681%201.932%202.044%202.548a7.708%207.708%200%200%200%203.416.728Zm.756-8.484c-.952-.056-1.68-.42-2.184-1.092-.653-.859-.98-2.24-.98-4.144%200-3.92%201.092-5.88%203.276-5.88%201.139%200%202.007.69%202.604%202.072.541%201.288.83%203.575.868%206.86-1.456%201.4-2.65%202.128-3.584%202.184Z%22%2F%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22m140.77%2025.38%203.464%202-4%206.928-3.464-2zM173.464%2055.268l2%203.464-6.928%204-2-3.464zM175.464%20141.268l-2%203.464-6.928-4%202-3.464zM144.732%20173.464l-3.464%202-4-6.928%203.464-2zM58.732%20175.464l-3.464-2%204-6.928%203.464%202zM26.536%20144.764l-2-3.464%206.928-4%202%203.464zM24.536%2058.732l2-3.464%206.928%204-2%203.464zM55.268%2026.536l3.464-2%204%206.928-3.464%202z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E") no-repeat';
  clock.style.backgroundSize = '100%';

  const createClockElement = (id, color, width, height, top, left) => {
    const element = document.createElement('div');
    element.id = id;
    element.style.position = 'absolute';
    element.style.background = color;
    element.style.borderRadius = '100px';
    element.style.width = width;
    element.style.height = height;
    element.style.top = top;
    element.style.left = left;
    element.style.transformOrigin = 'bottom';
    return element;
  }

  const hourId = 'hour'+Math.random().toString(32).substring(2);
  const minuteId = 'minute'+Math.random().toString(32).substring(2);
  const secondId = useSecond ? 'second'+Math.random().toString(32).substring(2) : null;

  const hour = createClockElement(hourId, '#333333', '3%', '25%', '25%', '48.5%');
  const minute = createClockElement(minuteId, '#333333', '2%', '30%', '20%', '49%');
  const second = useSecond ? createClockElement(secondId, '#777777', '1.2%', '35%', '15%', '49.4%') : null;

  clock.appendChild(hour);
  clock.appendChild(minute);
  if (useSecond) clock.appendChild(second);

  const tick = () => {
    const now = new Date(Date.now() + ((new Date().getTimezoneOffset() + offset) * 60 * 1000));
    const h = now.getHours();
    const m = now.getMinutes();
    const s = useSecond ? now.getSeconds() : 0;
    const hourDeg = h * 30 + m * 0.5 + s * 0.00833333333;
    const minuteDeg = m * 6 + s * 0.1;
    document.getElementById(hourId).style.transform = `rotate(${hourDeg}deg)`
    document.getElementById(minuteId).style.transform = `rotate(${minuteDeg}deg)`
    if (useSecond) {
      const secondDeg = s * 6;
      document.getElementById(secondId).style.transform = `rotate(${secondDeg}deg)`
    }
  }

  tick();

  if (useSecond) {
    setInterval(tick, 100);
  } else {
    setInterval(tick, 1000);
  }
});