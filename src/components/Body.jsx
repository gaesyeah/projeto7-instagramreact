import Stories from './Stories';
import Posts from './Posts';
import SideBar from './SideBar';

export default function Body() {
    return (

        <div class="ALL_side_bar">

            <div class="ALL">
                <Stories />
                <Posts />
            </div>

            <SideBar />

        </div>
    );
}