import { useParams } from "react-router-dom";

// interface RulesProps {
//     title: string;
// }

export const Rules: React.FC = () => {
    const params = useParams<Record<string, string | undefined>>();
    const title = params.title || 'Default Title';

    return (
        <div className="profile">
            <div className="profile__container">
                <div className="profile__body body-profile">
                    <div className="body-profile__header">
                        <h2 className="body-profile__title title title--medium">
                            {title}
                        </h2>
                    </div>
                    <div className="automated">
                        <div className="automated__body">
                            <p>
                                some txt
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
