import moment from 'moment';
import useSWR from 'swr';
import { FaYinYang } from 'react-icons/fa';
import './ThisWeekInCSA.css';

function ThisWeekInCSA() {
    const timelineData = [
        {
            title: 'Event 1',
            description: 'Description of Event 1',
        },
        {
            title: 'Event 2',
            description: 'Description of Event 2',
        },
        {
            title: 'Event 3',
            description: 'Description of Event 3',
        },
        // Add more events here
    ];

    return (
        <div className="timeline-container">
            <div className="timeline-title">
                <h2>This Week in CSA</h2>
            </div>
            <div className="timeline">
                {timelineData.map((item, index) => (
                    <div className="timeline-item">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThisWeekInCSA;