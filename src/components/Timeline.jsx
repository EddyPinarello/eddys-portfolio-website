import WorkEduCard from "./WorkEduCard";

function Timeline({ items }) {
    return (
        <div className="timeline-container">
            {items.map((item, index) => (
                <WorkEduCard
                    key={index}
                    role={item.role}
                    company={item.company}
                    title={item.title}
                    description={item.description}
                    tags={item.tags}
                    dateRange={item.dateRange}
                />
            ))}
        </div>
    );
}

export default Timeline;