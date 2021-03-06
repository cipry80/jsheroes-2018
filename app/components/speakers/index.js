import { Component } from 'react';
import ReactDOM from 'react-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import Section from '../common/section';
import { styles, mediaQueries } from '../../constants';

import speakers from '../../data/speakers';
import Speaker from './speaker';
import Speakermodal from './speaker.modal';

function openModal(index) { // eslint-disable-line max-statements
  const newModal = <Speakermodal data={speakers[index]} />;

  const modalContainer = document.createElement('div');
  document.body.appendChild(modalContainer);
  ReactDOM.render(newModal, modalContainer);
  const backdrop = document.getElementsByClassName('modal-backdrop')[0];
  const closeBtn = document.getElementsByClassName('modal-close-button')[0];
  document.body.style.overflow = 'hidden';
  closeBtn.addEventListener('click', () => {
    document.body.style.overflow = '';
    modalContainer.remove();
  });
  backdrop.addEventListener('click', () => {
    document.body.style.overflow = '';
    modalContainer.remove();
  });
}

function addClickEvents() {
  const elements = document.querySelectorAll('.speaker-sec');
  elements.forEach((element, index) => {
    element.addEventListener('click', () => {
      openModal(index);
    });
  });
}

class Speakers extends Component {
  componentDidMount() {
    addClickEvents();
  }

  render() {
    return (
      <Section>
        <ScrollableAnchor id={'speakers'}>
          <div className="speakers-section">
            <div className="row section-header">
              <h2>Our 2018 Heroes</h2>
              <p>
                The speakers that joined our mission are experts recognized by
                global communities. They are people who define our working
                environment every day. Most of them are for the first time in
                Romania and they’re really looking forward to our community
                event!
              </p>
            </div>

            { speakers.map(speaker => (
              <div key={speaker.name} className="speaker-box">
                <Speaker data={speaker} />
              </div>
             )) }

          </div>
        </ScrollableAnchor>

        <style jsx>{`
          .speakers-section {
            margin: 30px 0;
          }

          .speakers-section .section-header {
            margin-bottom: 45px;
            padding-right: 15px;
            padding-left: 15px;
          }
          
          .speakers-section .section-header h2 {
            text-align: center;
            font-size: 33px;
            color: ${styles.mainColor4};
            font-weight: 700;
            margin: 0 auto 30px;
          }
          
          .speakers-section .section-header p {
            width: 98%;
            margin-bottom: 20px;
            font-size: 16px;
            color: #555;
            line-height: 28px;
            font-weight: 300;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }
          
          @media (min-width: ${mediaQueries.S}) {
            .speakers-section .section-header h2 {
              font-size: 33px;
            }
            .speakers-section .section-header p {
              font-size: 16px;
              line-height: 28px;
              margin-bottom: 20px;
            }
          }
          
          @media (min-width: ${mediaQueries.L}) {
            .speakers-section .section-header h2 {
              font-size: 46px;
            }
            .speakers-section .section-header p {
              font-size: 17px;
              line-height: 30px;
              margin-bottom: 30px;
            }
          }
          
          @media (min-width: ${mediaQueries.XL}) {
            .speakers-section .section-header h2 {
              font-size: 52px;
            }
            .speakers-section .section-header p {
              font-size: 18px;
              line-height: 32px;
              margin-bottom: 40px;
            }
          }          
          
          .speaker-box {
            width: 100%;
            display: inline-flex;
          }
          
          @media (min-width: ${mediaQueries.S}) {
            .speaker-box {
              width: 50%
            }
          }
          
          @media (min-width: ${mediaQueries.XL}) {
            .speaker-box {
              width: 25%
            }
          }
        `}</style>
      </Section>
    );
  }
}

module.exports = Speakers;
