import WorkEduCard from './WorkEduCard';

export default function Timeline({ items }) {
    return (
        <div className="timeline-container">
            {items.map((item, index) => {
                const current = item.dateRange.includes("current");
                return (
                    <WorkEduCard
                        key={index}
                        {...item}
                        isCurrent={current}
                    />
                );
            })}
        </div>
    );
}
