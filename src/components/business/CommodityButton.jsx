import React, {Component} from 'react';
import constant from '../../constant/Constant';
import Button from "../base/Button";
import {Redirect} from 'react-router-dom';

/**
 * 商品详情列表卡片
 */
class CommodityButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isJumpPath: false,      // 是否执行路径跳转
            jumpPath: ''            // 需要跳转的路径
        };
        this.jump = this.jump.bind(this);
    }

    /**
     * 路径跳转
     * @param commodityNo
     */
    jump = (commodityNo) => {
        this.setState({
            isJumpPath: true,
            jumpPath: `commodityDetail?commodityNo=${commodityNo}`
        });
    };

    render() {
        if (this.state.isJumpPath) {
            return <Redirect push to={this.state.jumpPath}/>
        }
        // 上层传入的参数
        const {commodityNo, imgUrl, name, price, damageDegree, remark} = this.props;

        // 商品卡片
        return (
            <div className="CommodityApp" onClick={() => this.jump(commodityNo)}>
                <div className="CommodityHeader">
                    <img src={imgUrl || constant.defaultAvatar} alt="logo" className="ImgBox"/>
                </div>
                <div className="CommodityContext">
                    {
                        damageDegree && <div className="commodityTag">
                            <Button name={(10 - damageDegree) + "成新"} buttonName="ButtonTag"/>
                        </div>
                    }
                    <p className="CommodityTitle">{name}</p>
                    <p className="CommodityPrice">{price}元</p>
                    <p className="CommodityRemark">{remark}</p>
                </div>
            </div>
        );
    }

}

export default CommodityButton;