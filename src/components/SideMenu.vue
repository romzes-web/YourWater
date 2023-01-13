<template>
        <div class="sidenav-btn-container" v-bind:class="{ open: sidenavActive }" @click="sidenavActive = !sidenavActive" >
            <div class="burger-btn" ></div>        
        </div>
        
        <div class="wrapper">
            <div class="sidenav" :style="{width: sidenavActive ? '100%' : '0'}">
                <div class="menu_container" id="menu_container">
                    <SideMenuList 
                    v-for="(menu,i) in menus" :key="i"
                    :title="menu.title"
                    :titlelink="menu.to"
                />
                </div>

                <div class="sidenav_footer">
                    <div class="crossline"></div>
    
                    <div class="header__cart_container">
                        <div class="cart">
                            <div class="cart_logo">
                                <IconCart />
                            </div>
                            <div class="cost">
                                245 руб.
                            </div>
                        </div>
                        <div class="header__cart__button-container" >
                            <button class="reorder" onclick="alert('Окно повтора заказа или ссылка на форму')" >Повторить заказ</button>
                        </div>
                    </div>

                    <div class="sidemenu__contacts">
                        <div class="phone_number">
                            <IconPhoneVoice />
                            <a href="+7 (812) 947 79 93">+7 (812) 947 79 93</a>
                        </div>
                        <div class="info_mail">
                            <a href="info@yourwater.ru">info@yourwater.ru</a>
                        </div>
                        <div class="info">
                            Прием заявок круглосуточно
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import SideMenuList from './SideMenuList.vue';
import IconCart from './icons/IconCart.vue';
import IconPhoneVoice from './icons/IconPhoneVoice.vue';

    export default {
    data() {
        return {
            sidenavActive: false
        };
    },
    props: {
        menus:{
            type: Array,
            required: true
        }

    },
    components: { SideMenuList, IconCart, IconPhoneVoice  }
}
</script>

<style scoped>

a:link {
    text-decoration: none;
}


.header__cart_container {
    display: flex;
    margin-top: 20px;

}

.cart {
    display: flex;
    align-items: center;

    padding: 5px;

    border: 1px solid #FFFFFF;
    border-radius: 50px;
    width: 120px;
    height: 48px;

    margin-left: auto;
    margin-right: auto;

}

.cart_logo {
    position: relative;
    cursor: pointer;

    width: 40px;
    height: 40px;

    background: #128EC9;
    border-radius: 50px;
}


.cart_logo svg {
    color: #128EC9;
    height: 20px;
    width: 20px;
    position: absolute;
    top:10px;
    left:10px;
    }


.cost {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 90%;

    margin-left: auto;
    margin-right: auto;

    text-align: center;
    
    color: #FFFFFF;
}

.header__cart__button-container {
    margin-right: auto;
}

.reorder {
    padding: 5px;
    width: 170px;
    height: 48px;
    cursor: pointer;
    border: 2px solid #FFFFFF;
    border-radius: 50px;

    background-color: rgba(0, 0, 0, 0);
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;


    color: #FFFFFF;
}





.phone_number {
    display: flex;
    justify-content: flex-end;

    height: 32px;
    line-height: 32px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;

    color: #656565;

    margin-top: 20px;
}


.phone_number svg {
    height: 32px;
    width: 32px;
    margin-right: 10px;

    color: white;
}

.info_mail {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #128EC9;

    margin-top: 32px;

    text-align: right;
}


.info {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #ADADAD;

    margin-top: 10px;

    text-align: right;
}

@media only screen and (max-width: 768px) {
    .container .sidenav-btn-container {
        display: block;
    }
}


.sidenav_footer {
    background-color: #128EC9;
    width: 100%;
    bottom: 0;
}

.crossline {
    display: block;
    content: '';
    margin: 0 30px 0 30px;
    height: 1px;
    background-color: rgba(116, 210, 255, 0.5);;
}


    .sidemenu__contacts {
        margin-right: 30px;
    }

    .sidemenu__contacts a {
        color: #FFFFFF;
    }

    .sidemenu__contacts .info {
        color: #74D2FF;
    }

    .sidenav .header__cart_container {
        color: #fff;
    }


    .sidenav .cart_logo {
        background-color: #fff;
    }
    

    .sidenav-btn-container {
        background-color: rgba(0,0,0,0);

        display: none; 
        
        position: fixed;
        right: 0;
        top: 10px;
        padding: 35px 20px 35px 20px;

        cursor: pointer;
        transition: all .5s ease-in-out;
        z-index: 9000;
    }

    .burger-btn {
        width: 40px;
        height: 4px;
        background: #128EC9;
        border-radius: 5px;
        transition: all .2s ease-in-out;
        z-index: 95;
    }

    .burger-btn::before,
    .burger-btn::after {
        content: '';
        position: absolute;
        width: 40px;
        height: 4px;
        background: #128EC9;
        border-radius: 5px;
        transition: all .5s ease-in-out;
}

    .burger-btn::before {
        transform: translateY(-14px);
    }
    .burger-btn::after {
        transform: translateY(14px);
    }

    .sidenav-btn-container.open .burger-btn {
        background: transparent;
        box-shadow: none;
    }
    .sidenav-btn-container.open .burger-btn::before {
        transform: rotate(45deg);
        background: #fff;
    }
    .sidenav-btn-container.open .burger-btn::after {
        transform: rotate(-45deg) ;
        background: #fff;
    }

    .wrapper {
        white-space: nowrap;
        position: fixed;
        height: 100%;
        z-index: 90;
        top:0;
        right:0;
        z-index: 1020;
    }

    .sidenav {
        position: fixed;
        height: 100%;
        width: 100vh;
        z-index: 1;
        top: 0;
        right: 0;
        background-color: #128EC9;

        overflow-x: hidden;
        transition: 0.4s ease-out;
    }

    .sidenav::-webkit-scrollbar {
        display: none;
      }

    .menu_container {
        margin-top: env(safe-area-inset-top);
        height: calc(100vh - 240px); 
        overflow-y: auto;
    }



</style>

