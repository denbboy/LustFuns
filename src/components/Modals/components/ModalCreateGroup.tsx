import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addNewGroup, removeModal } from '../../../redux/toolkitSlice';

export const ModalCreateGroup: React.FC = () => {
    const [groupName, setGroupName] = useState<string>('');
    const [error, setError] = useState<string>('');
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        if (groupName.trim() === '') {
            setError('Group name is required');
            return;
        }

        dispatch(addNewGroup(`${groupName}`))

        dispatch(removeModal('createGroup'))

        setError('');

        setGroupName('');

        toast.success(`New group ${groupName}, created successfully`);

        console.log({ groupName });
    };

    return (
        <div className="popup-add-group__body popup__body">
            <h4 className="popup-add-group__title">CREATE NEW GROUP</h4>
            <form onSubmit={handleSubmit}>
                <div className="popup-add-group__block">
                    <div className="input-box">
                        <label>Group name</label>
                        <input
                            type="text"
                            placeholder="Enter group name"
                            className="input-box__input input input-main"
                            value={groupName}
                            onChange={(e) => setGroupName(e.target.value)}
                        />
                        {error && <p className="error-message" style={{ color: '#CB0000' }}>{error}</p>}
                    </div>
                </div>
                <button type="submit" className="popup-add-group__post button button--fw">
                    <span>Create</span>
                </button>
            </form>
        </div>
    );
};
