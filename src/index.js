/**
 * @desc  this is used to create a component which
 *          is easy to execute copy operation
 */
import React, { Component, PropTypes } from 'react'
import copyText,{copy} from './lib/copy'

export default class CopyBtn extends Component{
    static propTypes = {
        'targetId':PropTypes.string,
        'msg':PropTypes.string,
        'innerHTML':PropTypes.string,
        'callback':PropTypes.func,
        'className':PropTypes.string,
        'style':PropTypes.object
    }
    static defaultProps = {
        innerHTML:'复制内容',
        callback:()=>{}
    }
    render(){
        let {innerHTML,targetId,msg,callback,className} = this.props;
        let copyData = {id:targetId,msg,callback};
        return (
            <button className={className} onClick={copyText.bind(this,copyData)}>{innerHTML}</button>
        )
    }
};

export let copyFunc = copy;



