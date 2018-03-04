import { Component, Prop } from '@stencil/core';

import { Bar } from '../../global/interfaces';

@Component({
  tag: 'bar-list',
  styleUrl: 'bar-list.scss'
})
export class barList {

  @Prop() bars: Array<Bar>;

  render() {
    if (this.bars) {
      return (
        <ion-list>
          {this.bars.map((bar: Bar) => {
            let color;

            if (bar.rating >= 4.0) {
              color = 'good';
            } else if (bar.rating <= 3.9 && bar.rating > 2.9) {
              color='ok'
            } else {
              color='bad';
            };

            return (
              <ion-item>
                <ion-avatar slot="start" class={color}>
                  <div>{bar.rating}</div>
                </ion-avatar>
                <ion-label>
                  <h2>{bar.name}</h2>

                  <p>{bar.vicinity}</p>

                  <ion-buttons>
                    <stencil-route-link url={`/bars/directions/${bar.vicinity}}`} exact={true}>
                      <ion-button color='primary' fill='clear'> Directions </ion-button>
                    </stencil-route-link>

                    <share-button beer={bar}></share-button>

                  </ion-buttons>
                </ion-label>
              </ion-item>
            )
          })}
        </ion-list>
      );
    } else {
      return (
        <ion-list>
          <div id='fake-card'></div>
        </ion-list>
      )
    }
  }
}