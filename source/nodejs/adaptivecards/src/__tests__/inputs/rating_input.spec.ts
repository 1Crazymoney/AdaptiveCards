// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import {RatingInput} from "../../card-elements";

test('RatingInput should be instantiated', ()=>{
    const ratingInput = new RatingInput();
    expect(RatingInput).toEqual(expect.anything());
})