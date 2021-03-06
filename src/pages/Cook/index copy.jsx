import { useState, useEffect } from 'react';
import Got from '../../components/Got';
import './index.css';

const Cook = () => {
    const [isGot, setIsGot] = useState(false);
    const [name, setName] = useState('');
    const main = ['鸡肉', '猪肉', '花菜', '土豆'];
    const side = ['豆腐', '鸡丁'];
    const tagColor = [
        'rgb(236, 17, 17)',
        'rgb(236, 141, 17)',
        'rgb(177, 174, 11)',
        'rgb(116, 115, 109)',
        'rgb(77, 75, 65)',
        'rgb(35, 207, 50)',
        'rgb(38, 204, 162)',
        'rgb(11, 156, 120)',
        'rgb(4, 187, 211)',
        'rgb(7, 133, 206)',
        'rgb(7, 64, 151)',
        'rgb(9, 24, 235)',
        'rgb(157, 160, 212)',
        'rgb(144, 76, 235)',
        'rgb(209, 76, 235)',
        'rgb(224, 19, 224)',
        'rgb(238, 45, 126)',
        'rgb(253, 48, 65)',
        '#f50',
        '#2db7f5',
        '#87d068',
        '#108ee9',
    ];
    const mainLen = main.length;
    const sideLen = side.length;
    const colorLen = tagColor.length;
    const getRandomNum = (Min, Max) => {
        const Range = Max - Min + 1;
        const Rand = Math.random();
        return Min + Math.floor(Rand * Range);
    };
    const getName = () => {
        const newName = `${main[getRandomNum(0, mainLen - 1)]}炒${
            side[getRandomNum(0, sideLen - 1)]
        }`;
        setName(newName);
        setIsGot(true);
    };
    return (
        <>
            {isGot ? (
                <Got name={name} />
            ) : (
                <div className="Cook-box">
                    <div className="main">
                        <div className="title">主菜</div>
                        <div className="content">
                            {main.map((item, index) => (
                                <span
                                    className="theTag"
                                    style={{ backgroundColor: tagColor[(index + 1) % colorLen] }}
                                    key={index}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="side">
                        <div className="title">小菜</div>
                        <div className="content">
                            {side.map((item, index) => (
                                <span
                                    className="theTag"
                                    style={{ backgroundColor: tagColor[(index + 1) % colorLen] }}
                                    key={index}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="make-btn" onClick={getName}>
                        看看吃啥!
                    </div>
                </div>
            )}
        </>
    );
};

export default Cook;
