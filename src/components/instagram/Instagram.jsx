import React from 'react';
import './instagram.scss'

function Instagram({instagram}) {
    return (
        <section className="instagram">
            <div className="instagram__inner">
                <div className="instagram__container">
                    <svg width="256" height="73" viewBox="0 0 256 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.134 0.251899C7.91046 2.4399 2.16896 8.6134 0.355457 16.3684C-1.94154 26.1909 7.61546 30.3459 8.39996 28.9854C9.32246 27.3849 6.68746 26.8439 6.14496 21.7469C5.44396 15.1639 8.50446 7.8084 12.3565 4.5809C13.0715 3.9809 13.038 4.8159 13.038 6.3594C13.038 9.1199 12.8855 33.9019 12.8855 39.0739C12.8855 46.0719 12.5965 48.2819 12.077 50.4659C11.5515 52.6784 10.7055 54.1739 11.346 54.7499C12.062 55.3939 15.119 53.8614 16.8885 51.3919C19.0105 48.4299 19.7535 44.8719 19.887 41.0094C20.048 36.3524 20.041 28.9624 20.048 24.7474C20.054 20.8819 20.113 9.5624 19.98 2.7574C19.9475 1.0874 15.3185 -0.663601 13.134 0.251899Z" fill="#343433" />
                        <path d="M198.605 33.0034C198.437 36.6419 197.631 39.4854 196.632 41.4914C194.697 45.3749 190.682 46.5804 188.977 40.9984C188.048 37.9554 188.004 32.8734 188.672 28.6269C189.352 24.3014 191.251 21.0344 194.394 21.3289C197.495 21.6204 198.947 25.6159 198.605 33.0039V33.0034ZM146.33 55.5764C146.288 61.6214 145.337 66.9214 143.297 68.4614C140.403 70.6444 136.513 69.0064 137.319 64.5954C138.031 60.6919 141.402 56.7054 146.339 51.8344C146.339 51.8344 146.349 52.9454 146.33 55.5764ZM145.54 32.9679C145.363 36.2819 144.504 39.6104 143.567 41.4914C141.632 45.3749 137.588 46.5889 135.912 40.9984C134.766 37.1784 135.04 32.2354 135.607 29.1204C136.343 25.0789 138.127 21.3294 141.329 21.3294C144.443 21.3294 145.979 24.7459 145.54 32.9679ZM115.258 32.9179C115.068 36.4269 114.383 39.3604 113.285 41.4914C111.297 45.3484 107.364 46.5714 105.63 40.9984C104.379 36.9799 104.805 31.5009 105.325 28.5409C106.097 24.1484 108.03 21.0344 111.047 21.3294C114.147 21.6324 115.653 25.6159 115.258 32.9179V32.9179ZM254.034 37.0169C253.277 37.0169 252.931 37.7979 252.644 39.1119C251.653 43.6839 250.609 44.7154 249.265 44.7154C247.762 44.7154 246.412 42.4524 246.065 37.9214C245.792 34.3584 245.836 27.7994 246.185 21.2749C246.256 19.9344 245.886 18.6079 242.291 17.3019C240.744 16.7399 238.495 15.9124 237.375 18.6154C234.211 26.2524 232.973 32.3154 232.682 34.7774C232.667 34.9049 232.51 34.9314 232.483 34.6334C232.297 32.6609 231.883 29.0759 231.831 21.5449C231.821 20.0754 231.51 18.8249 229.888 17.8009C228.835 17.1359 225.64 15.9609 224.489 17.3594C223.492 18.5024 222.337 21.5794 221.138 25.2274C220.163 28.1924 219.484 30.1974 219.484 30.1974C219.484 30.1974 219.497 22.1984 219.508 19.1639C219.513 18.0194 218.728 17.6379 218.491 17.5689C217.426 17.2599 215.326 16.7434 214.435 16.7434C213.335 16.7434 213.066 17.3574 213.066 18.2534C213.066 18.3709 212.893 28.7849 212.893 36.0669C212.893 36.3834 212.893 36.7284 212.894 37.0954C212.286 40.4424 210.314 44.9854 208.169 44.9854C206.021 44.9854 205.008 43.0864 205.008 34.4049C205.008 29.3404 205.16 27.1379 205.234 23.4749C205.278 21.3649 205.362 19.7449 205.357 19.3774C205.341 18.2499 203.392 17.6814 202.484 17.4714C201.573 17.2599 200.781 17.1774 200.162 17.2129C199.287 17.2629 198.667 17.8364 198.667 18.6264C198.667 19.0504 198.672 19.8554 198.672 19.8554C197.545 18.0834 195.731 16.8504 194.525 16.4929C191.275 15.5279 187.884 16.3829 185.326 19.9624C183.293 22.8059 182.067 26.0274 181.585 30.6549C181.232 34.0384 181.347 37.4689 181.974 40.3704C181.217 43.6444 179.811 44.9854 178.272 44.9854C176.037 44.9854 174.417 41.3384 174.605 35.0294C174.729 30.8799 175.559 27.9679 176.467 23.7549C176.854 21.9589 176.539 21.0189 175.751 20.1179C175.027 19.2914 173.486 18.8689 171.271 19.3879C169.693 19.7584 167.436 20.1569 165.372 20.4629C165.372 20.4629 165.497 19.9654 165.599 19.0894C166.136 14.4944 161.142 14.8669 159.549 16.3344C158.598 17.2109 157.951 18.2444 157.705 20.1024C157.315 23.0514 159.72 24.4424 159.72 24.4424C158.932 28.0544 156.997 32.7724 155 36.1839C153.931 38.0114 153.113 39.3659 152.056 40.8054C152.022 35.0285 152.06 29.2514 152.169 23.4754C152.213 21.3654 152.297 19.7884 152.293 19.4204C152.281 18.5964 151.799 18.2844 150.798 17.8904C149.912 17.5414 148.865 17.3004 147.778 17.2154C146.407 17.1094 145.581 17.8359 145.603 18.6959C145.607 18.8584 145.607 19.8554 145.607 19.8554C144.48 18.0834 142.666 16.8504 141.46 16.4929C138.21 15.5279 134.819 16.3829 132.261 19.9624C130.228 22.8059 128.897 26.7969 128.52 30.6199C128.169 34.1824 128.233 37.2099 128.712 39.7609C128.196 42.3149 126.71 44.9859 125.03 44.9859C122.882 44.9859 121.66 43.0864 121.66 34.4049C121.66 29.3404 121.812 27.1379 121.887 23.4749C121.931 21.3654 122.014 19.7449 122.01 19.3774C121.994 18.2499 120.044 17.6819 119.137 17.4714C118.188 17.2514 117.368 17.1714 116.739 17.2179C115.909 17.2794 115.325 18.0229 115.325 18.5774V19.8554C114.197 18.0834 112.384 16.8504 111.177 16.4929C107.927 15.5279 104.555 16.3969 101.978 19.9624C100.298 22.2869 98.9379 24.8639 98.2379 30.5689C98.0354 32.2174 97.9459 33.7619 97.9579 35.2044C97.2879 39.3024 94.3279 44.0254 91.9074 44.0254C90.4909 44.0254 89.1414 41.2774 89.1414 35.4219C89.1414 27.6219 89.6244 16.5159 89.7064 15.4459C89.7064 15.4459 92.7649 15.3939 93.3569 15.3869C94.8829 15.3699 96.2644 15.4064 98.2969 15.3019C99.3159 15.2504 100.298 11.5919 99.2459 11.1394C98.7689 10.9344 95.3994 10.7554 94.0634 10.7269C92.9404 10.7019 89.8134 10.4699 89.8134 10.4699C89.8134 10.4699 90.0939 3.09841 90.1594 2.31991C90.2144 1.67041 89.3744 1.33641 88.8934 1.13391C87.7224 0.638913 86.6749 0.401413 85.4334 0.145413C83.7174 -0.208587 82.9394 0.137913 82.7874 1.58541C82.5584 3.78291 82.4399 10.2194 82.4399 10.2194C81.1809 10.2194 76.8799 9.97341 75.6209 9.97341C74.4509 9.97341 73.1879 15.0054 74.8059 15.0674C76.6669 15.1394 79.9104 15.2024 82.0604 15.2664C82.0604 15.2664 81.9644 26.5554 81.9644 30.0414C81.9644 30.4114 81.9664 30.7689 81.9684 31.1154C80.7849 37.2829 76.6169 40.6149 76.6169 40.6149C77.5119 36.5344 75.6834 33.4699 72.3899 30.8759C71.1764 29.9204 68.7809 28.1109 66.1009 26.1279C66.1009 26.1279 67.6529 24.5979 69.0299 21.5199C70.0049 19.3389 70.0474 16.8444 67.6529 16.2939C63.6969 15.3839 60.4354 18.2894 59.4624 21.3914C58.7084 23.7944 59.1104 25.5769 60.5874 27.4289C60.6949 27.5644 60.8124 27.7029 60.9324 27.8419C60.0399 29.5629 58.8129 31.8804 57.7739 33.6774C54.8899 38.6674 52.7114 42.6134 51.0649 42.6134C49.7489 42.6134 49.7664 38.6064 49.7664 34.8549C49.7664 31.6209 50.0054 26.7584 50.1964 21.7249C50.2594 20.0599 49.4264 19.1114 48.0314 18.2524C47.1834 17.7304 45.3739 16.7044 44.3259 16.7044C42.7569 16.7044 38.2309 16.9179 33.9549 29.2879C33.4159 30.8469 32.3569 33.6879 32.3569 33.6879L32.4484 18.8124C32.4484 18.4634 32.2624 18.1264 31.8369 17.8959C31.1164 17.5044 29.1919 16.7044 27.4804 16.7044C26.6654 16.7044 26.2579 17.0834 26.2579 17.8394L26.1089 41.1124C26.1089 42.8809 26.1549 44.9439 26.3299 45.8459C26.5039 46.7489 26.7864 47.4839 27.1354 47.9209C27.4849 48.3574 27.8884 48.6909 28.5539 48.8279C29.1734 48.9554 32.5654 49.3909 32.7419 48.0949C32.9529 46.5409 32.9614 44.8609 34.7424 38.5939C37.5154 28.8369 41.1304 24.0769 42.8304 22.3859C43.1279 22.0909 43.4669 22.0729 43.4504 22.5564C43.3784 24.6954 43.1229 30.0414 42.9514 34.5814C42.4909 46.7339 44.7014 48.9864 47.8609 48.9864C50.2779 48.9864 53.6849 46.5849 57.3369 40.5059C59.3718 37.1182 61.3973 33.7248 63.4134 30.3259C64.5199 31.3504 65.7624 32.4529 67.0034 33.6309C69.8884 36.3689 70.8354 38.9709 70.2069 41.4389C69.7269 43.3254 67.9164 45.2699 64.6949 43.3804C63.7559 42.8289 63.3549 42.4024 62.4109 41.7809C61.9039 41.4474 61.1294 41.3474 60.6649 41.6974C59.4589 42.6064 58.7689 43.7634 58.3749 45.1954C57.9919 46.5889 59.3874 47.3254 60.8344 47.9699C62.0799 48.5244 64.7574 49.0269 66.4644 49.0839C73.1169 49.3064 78.4464 45.8719 82.1564 37.0124C82.8204 44.6639 85.6464 48.9934 90.5569 48.9934C93.8399 48.9934 97.1314 44.7499 98.5709 40.5754C98.9839 42.2769 99.5959 43.7569 100.386 45.0084C104.169 51.0034 111.509 49.7134 115.196 44.6224C116.336 43.0494 116.51 42.4844 116.51 42.4844C117.048 47.2909 120.919 48.9704 123.135 48.9704C125.617 48.9704 128.18 47.7969 129.976 43.7529C130.187 44.1919 130.417 44.6114 130.668 45.0084C134.451 51.0034 141.792 49.7134 145.479 44.6224C145.653 44.3834 145.804 44.1674 145.935 43.9724L146.043 47.1299L142.649 50.2434C136.959 55.4584 132.637 59.4134 132.319 64.0199C131.914 69.8934 136.675 72.0764 140.282 72.3624C144.105 72.6659 147.386 70.5519 149.399 67.5934C151.171 64.9889 152.331 59.3839 152.245 53.8484C152.212 51.6314 152.155 48.8129 152.112 45.7914C154.109 43.4719 156.36 40.5399 158.432 37.1089C160.69 33.3694 163.11 28.3474 164.349 24.4389C164.349 24.4389 166.451 24.4574 168.695 24.3104C169.413 24.2634 169.619 24.4104 169.486 24.9359C169.326 25.5719 166.651 35.8884 169.093 42.7609C170.763 47.4659 174.53 48.9789 176.763 48.9789C179.377 48.9789 181.878 47.0049 183.218 44.0739C183.38 44.4004 183.548 44.7164 183.733 45.0089C187.516 51.0039 194.831 49.7054 198.544 44.6224C199.382 43.4754 199.857 42.4844 199.857 42.4844C200.654 47.4594 204.523 48.9959 206.739 48.9959C209.047 48.9959 211.238 48.0494 213.015 43.8439C213.09 45.6959 213.206 47.2099 213.391 47.6869C213.503 47.9794 214.159 48.3454 214.636 48.5224C216.748 49.3054 218.901 48.9354 219.698 48.7744C220.25 48.6624 220.681 48.2194 220.74 47.0764C220.895 44.0739 220.8 39.0294 221.71 35.2799C223.237 28.9884 224.663 26.5479 225.339 25.3399C225.717 24.6624 226.144 24.5509 226.159 25.2674C226.191 26.7174 226.263 30.9739 226.855 36.6939C227.29 40.8999 227.87 43.3864 228.317 44.1739C229.591 46.4239 231.163 46.5304 232.444 46.5304C233.259 46.5304 234.963 46.3054 234.811 44.8734C234.736 44.1754 234.866 39.8614 236.373 33.6629C237.356 29.6149 238.996 25.9579 239.588 24.6204C239.806 24.1274 239.908 24.5159 239.904 24.5919C239.779 27.3794 239.5 36.4974 240.635 41.4844C242.175 48.2399 246.628 48.9959 248.18 48.9959C251.493 48.9959 254.203 46.4759 255.115 39.8449C255.335 38.2489 255.01 37.0169 254.034 37.0169Z" fill="#343433" />
                    </svg>

                </div>

                <ul className="instagram__list">
                {instagram.map((item,index)=>{
                   return <li key={index} className="instagram__item"><img className='instagram__img' src={process.env.PUBLIC_URL +'/'+ item.images} alt="instagram" /></li>
                })
                }
                </ul>
            </div>


        </section>
    );
}

export default Instagram;