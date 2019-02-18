import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="row f-o-1">
                <div className="col-3 text-center">
                    <h5>SOCIAL MEDIA</h5>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Facebook_Home_logo_old.svg/768px-Facebook_Home_logo_old.svg.png" alt="icon" width="50" heigt="50" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CIS-A2K_Instagram_Icon_%28Black%29.svg/500px-CIS-A2K_Instagram_Icon_%28Black%29.svg.png" alt="icon" width="50" heigt="50" />
                        <img src="https://cdn1.iconfinder.com/data/icons/somacro___dpi_social_media_icons_by_vervex-dfjq/500/twitter-old.png" alt="icon" width="50" heigt="50" />
                    </div>
                </div>
                <div className="col-3 text-center">
                    <h5>Delivery</h5>
                    <p>Delivery 1</p>
                    <p>Delivery 2</p>
                    <p>Delivery 3</p>
                </div>
                <div className="col-3 text-center">
                    <h5>NEED HELP?</h5>
                    <p>FAQ</p>
                    <p>Contact US</p>
                    <p>Return Policy</p>
                </div>
                <div className="col-3 text-center">
                    <h5>INSTAGRAM PHOTOS</h5>
                    <div>
                        <img alt="people" src="https://icons-for-free.com/free-icons/png/512/2754576.png" width="50" height="50" />
                        <img alt="people" src="https://ichatten.no/img/if_10_avatar_2754575.png" width="50" height="50" />
                        <img alt="people" src="https://ichatten.no/img/if_3_avatar_2754579.png" width="50" height="50" />
                        <img alt="people" src="http://tkdntnu.no/wp-content/uploads/2016/03/1479159955_male3.png" width="50" height="50" />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
