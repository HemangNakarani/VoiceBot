export default function open(entity:string){

    let url = ''

    switch(entity){
        case "":
            url = 'https://champagne.sprinklr.com/advertising/manager'
            break;
        
        case "Strategy Group":
            url = 'https://champagne.sprinklr.com/advertising/manager/strategyGroup'
            break;
            
        case "Campaigns":
            url = 'https://champagne.sprinklr.com/advertising/manager/PAID_INITIATIVE'
            break;

        case "Ads":
            url = 'https://champagne.sprinklr.com/advertising/manager/AD_VARIANT'
            break;
        
        case "Ad Sets":
            url = 'https://champagne.sprinklr.com/advertising/manager/AD_SET'
            break;
        
        default :
            url = 'https://champagne.sprinklr.com/advertising/manager'
    }

    window.open(url,"_self")

}

