/**
 * @param text 用户需要复制的文本内容
 * @param id
 * @param callback
 */
export default function (copyEle) {
    let {
        id,
        msg,
        callback
    } = copyEle;
    debugger
    msg = copy.fetchMsg(msg, id);
    try {
        copy.clipCopy(msg)
    } catch (e) {
        copy.inputCopy(msg)
    } finally {
        // 如果有回调则执行回调函数
        if (callback) callback();
    }
}

export let copy = {
    /**
     * @param data 复制的内容
     * @desc   使用 input 方式进行内容复制
     */
    inputCopy(data){
        var aux = document.createElement("input");
        aux.setAttribute("value", data);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
    },
    /**
     * @desc 使用 clipboard 方式进行内容复制
     */
    clipCopy(data){
        document.addEventListener('copy', function copy(e) {
            e.clipboardData.setData('text/plain', data);
            e.preventDefault();
        })
        document.execCommand('copy');
        document.removeEventListener('copy', 'copy');
    },
    /**
     * @param text 复制内容
     * @param id 提供 DOM 节点的 id 属性
     * @desc 用来判断用户是直接复制内容,还是通过获取元素内容进行的
     *       并且,这里并不会区分是 input 还是普通的 DOM 元素
     */
    fetchMsg(text, id){
        if (!id)return text;
        let ele = document.querySelector('#' + id);
        const TEXT = ['INPUT', 'TEXTAREA'];
        if (TEXT.includes(ele.tagName))
            return ele.value;
        else
            return ele.innerHTML;
    }
}