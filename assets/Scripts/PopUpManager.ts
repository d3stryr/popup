
import { _decorator,Label,sys,JsonAsset, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PopUpManager
 * DateTime = Sun May 01 2022 18:17:04 GMT+0530 (India Standard Time)
 * Author = prajwal_ramappa
 * FileBasename = PopUpManager.ts
 * FileBasenameNoExtension = PopUpManager
 * URL = db://assets/Scripts/PopUpManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('PopUpManager')
export class PopUpManager extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property({type:JsonAsset})
    popupdata:JsonAsset|null = null;

    @property({type:Label})
    popuptext:Label|null = null;

    @property({type:Node})
    popupNode:Node|null = null;

    start () {
        sys.localStorage.setItem('countofpopups',JSON.stringify(0));
        this.checkLaunch();
    }
    checkLaunch()
    {
        var launchCount=JSON.parse(sys.localStorage.getItem('launchCount'));
        if(launchCount==null)
        {
            sys.localStorage.setItem('launchCount',JSON.stringify(0));
        }
        else
        {
            sys.localStorage.setItem('launchCount',JSON.stringify(++launchCount));
        }
        this.popup();
    }

    popup()
    {
        var launchCount=JSON.parse(sys.localStorage.getItem('launchCount'));
        var popCount=JSON.parse(sys.localStorage.getItem('countofpopups')); 
        var dets=this.popupdata.json;
        if(dets.popupData.length>0)
        {
            for(let i=0;i<dets.popupData.length;i++)
            {
                if(dets.popupData[i].launchCount==launchCount+1)
                {
                    if(popCount<dets.popupData[i].popups.length)
                    {
                        this.popuptext.string=dets.popupData[i].popups[popCount].text;
                        this.popupNode.active = true;
                        sys.localStorage.setItem('countofpopups',JSON.stringify(++popCount));
                    }
                }
            }
        }
    }
    OnClickClose()
    {
        this.popupNode.active = false;
        this.popup();
    }
    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
