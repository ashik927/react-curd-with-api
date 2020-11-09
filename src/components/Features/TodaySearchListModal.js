import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TodaySearchList = () => {
  const [valueAd , setValueAd] = useState({});
 
    return (
        <div>
            <div class="modal fade" id="todaySearchListModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog  modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Today Search List</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body important-links">
        
        <Link type="button" class="btn btn-pressed mt-3 important-links-button w-100"  to="/todaysearchlistad" target="_blank">Appellate Division Search List</Link><br/>
        <Link type="button" class="btn btn-pressed mt-3 important-links-button w-100"  to="/todaysearchlisthcd" target="_blank">Heigh Court Division Search List</Link><br/>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default TodaySearchList;