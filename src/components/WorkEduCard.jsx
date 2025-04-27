export default function WorkEduCard({ role, company, title, description, tags, dateRange }) {
    return (
        <div className="timeline-item">
            <div className="timeline-left">
                <div className="timeline-date">{dateRange}</div>
                <div className="timeline-circle" />
            </div>
            <div className="timeline-right">
                <div className="work-card">
                    <div className="work-card-header">
                        <span className="work-card-role">{role}</span>
                        <span className="work-card-company">{company}</span>
                    </div>
                    <p className="work-card-description">{description}</p>
                    <div className="work-card-tags">
                        {tags.map((tag, index) => (
                            <div key={index} className="work-card-tag">{`</${tag}>`}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
