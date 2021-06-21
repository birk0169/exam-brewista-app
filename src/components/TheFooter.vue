<template>
    <div class="footer text-center bg-white shadow-2xl w-full flex justify-around fixed bottom-0">
        <router-link to="/">
            <div class="pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20.745" viewBox="0 0 20 20.745">
                    <g transform="translate(-70 -14.255)">
                        <g transform="translate(71 15.339)">
                            <path class="b" d="M.327,7.361l7.8-7.1A1,1,0,0,1,9.452.241l8.2,7.12a1.01,1.01,0,0,1,.345.76v9.54a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V8.1A1,1,0,0,1,.327,7.361Z"/>
                        </g>
                    </g>
                </svg>
                <span class="dot"></span>
            </div>
        </router-link>
        <router-link to="favorites">
            <div class="pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="19.76" height="17.364" viewBox="0 0 19.76 17.364">
                    <g transform="translate(1.126 1)">
                        <path class="a" d="M3.314,5.318a4.5,4.5,0,0,1,6.363,0L11,6.636l1.319-1.317a4.5,4.5,0,0,1,6.363,0c1.757,1.757,1.224,4.673,0,6.364-4.489,6.2-6.727,7.682-7.682,7.682s-3.555-1.247-7.682-7.683c-1.271-1.982-1.757-4.606,0-6.363Z" transform="translate(-2.171 -4)"/>
                    </g>
                </svg>
                <span class="dot"></span>
            </div>
        </router-link>
    </div>
</template>

<style scoped>
.footer{
    min-height: 81px;
}

.router-link-active .dot {
  height: 8px;
  width: 8px;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
}

.a{fill:none;stroke:#000;stroke-width:2px;fill-rule:evenodd;}

.b{stroke:#000;stroke-miterlimit:10;stroke-width:2px;}
</style>