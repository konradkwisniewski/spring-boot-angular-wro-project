package com.ai.ai.controller;

import org.springframework.web.bind.annotation.*;

/**
 * Created by Korepetycje on 20.12.2017.
 */
@RestController
@RequestMapping(value = "/api/text")
public class ReplaceCtrl {

    @RequestMapping(value="/change/{text}/{char}", method = RequestMethod.GET, produces = "text/plain")
    @ResponseBody
    String replacing(@PathVariable("text") String text, @PathVariable("char") Character znak){
        return text.replace(znak, 'T');
    }

    @RequestMapping(value="/change/", headers="Accept=*/*", method = RequestMethod.POST, produces = "text/plain")
    @ResponseBody
    String replacingPost(@RequestParam("text") String text, @RequestParam("char") Character znak){
        return text.replace(znak, 'T');
    }

}
