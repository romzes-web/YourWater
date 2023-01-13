<template>
    <div class="title-background">
        <a class="sidenav-title" :href="titlelink"> {{ title }} </a>
    </div>
    <div v-for="(item,i) in items" :key="i" class="sidenav-item-container" :href="item.link">
        <div class="sidenav-item" >
          <a class="sidenav-item-title" :href="item.link">{{ item.name }}</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            items: Array,
            titlelink: String,    
        }
    }
</script>

<style scoped>

a:link {
    text-decoration: none;
}

a {
    font-weight: 400;
    font-size: 20px;
    line-height: 300%;
}

.title-background {
    margin: 10px 30px 10px 30px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.title-background:first-child:after {
    display: block;
    content: '';
    margin: 20px 0 0 0;
    height: 1px;
    background-color: #fff;
}

.sidenav-title {
    color: #fff;
    margin-left: 10px;
    cursor: pointer;
    

    transition: 400ms ease;
}

.sidenav-item-container {
    border-bottom: solid #3C88F0 2px;
}

.sidenav-item-title {
    padding: 8px 8px 8px 20px;
    text-decoration: none;
    font-size: 1rem;
    color: #3C88F0;
    display: block;
    transition: 0.3s;
}

.sidenav-item-title:hover {
    color: #003f98;
}


</style>