        function StopWatch(){
            // because we don't use 'this' the color is not part of Circle object beause it is local and it will be destroy as soon as the object goes out of the scope.
            // In fact ,'let' make the property private to the class (local varivale)
            let startTime,endTime, duration = 0;
            let isStarted = false;

            this.start = function(){
                    if (isStarted)
                        throw new  Error ('it is already started');
                   
                    isStarted = true;

                    startTime = new Date();

            };
            this.reset = function() {
                startTime = null;
                endTime = null;
                isStarted = false;
                duration = 0;
            };

            this.stop = function(){
                    if (!isStarted)
                        throw new  Error ('it is already stoped');
                    
                    isStarted = false;

                    endTime = new Date();

                    const seconds = (endTime.getTime() - startTime.getTime() ) / 1000;
                    //console.log(seconds);
                    duration += seconds;

            };

            Object.defineProperty(this, 'duration', {
                get: function() { return duration;}
            });
        }

        const sw = new StopWatch;
    