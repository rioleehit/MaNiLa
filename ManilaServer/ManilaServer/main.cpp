//
//  main.cpp
//  ManilaServer
//
//  Created by user on 2018/9/18.
//  Copyright © 2018年 otis. All rights reserved.
//

#include <iostream>
#include <boost/regex.hpp>

#include "Server/Util.hpp";

void test(){
    using namespace mnl;
    int results[7]={0};
    for (int i=0; i<100000; ++i) {
        results[Util::random(6, 1)]++;
    }
    for (int i=1; i<=6; ++i) {
       std::cout << results[i] << std::endl;
    }
}
int main(int argc, const char * argv[]) {
    srand((unsigned)time(0));
    test();
//    std::string   str = "2013-08-15";
//    boost::regex  rex("(?<year>[0-9]{4}).*(?<month>[0-9]{2}).*(?<day>[0-9]{2})");
//    boost::smatch res;
//
//    std::string::const_iterator begin = str.begin();
//    std::string::const_iterator end   = str.end();
//
//    if (boost::regex_search(begin, end, res, rex))
//    {
//        std::cout << "Day:   " << res ["day"] << std::endl
//        << "Month: " << res ["month"] << std::endl
//        << "Year:  " << res ["year"] << std::endl;
//    }
    return 0;
}
