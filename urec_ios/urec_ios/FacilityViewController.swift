//
//  FacilityViewController.swift
//  urec_ios
//
//  Created by Hannah Gamiel on 4/9/15.
//  Copyright (c) 2015 Hannah Gamiel. All rights reserved.
//

import UIKit

class FacilityViewController: ParentPageViewController, UIWebViewDelegate  {


    override func viewDidLoad() {
        super.viewDidLoad()
        
        if(firstTime) {
            println("First time viewing FACILITY viewcontroller!")
            if(url == "") {
                self.navigationBar.title = "U-REC"
                url = "http://www.whitworth.edu/urec/"
                isRoot = true
            }
            else {
                println(url);
            }
        }
        
        setInitialWebView()
        
        setStyle()
        
        

        //navigationController?.pushViewController(newVC, animated: true)
 
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}

