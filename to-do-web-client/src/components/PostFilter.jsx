import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.filter}
                onChange={e => setFilter({...filter, filter: e.target.value})}
                type="text"
                placeholder="Поиск"
            />
            <hr style={{margin: '15px 0'}}/>
            <MySelect 
                value={filter.sort}
                default={"Сортировка по"} 
                sort={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    {
                        value: "title",
                        text: "Заголовок"
                    },
                    {
                        value: "body",
                        text: "Текст"
                    }
                ]}
            />
        </div>
    );
};

export default PostFilter;