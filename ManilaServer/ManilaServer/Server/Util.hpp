#ifndef UTIL_HPP
#define UTIL_HPP
#include <time.h>
#include <stdlib.h>

namespace mnl{
    namespace Util{
        int random(int from,int to){
            if(from>to){
                int tmp = from;
                from = to;
                to = tmp;
            }
            int offset = to - from + 1;
            if(1 == offset){return from;}
            return from + rand() % offset;
        }
    }
}


#endif //UTIL_HPP
