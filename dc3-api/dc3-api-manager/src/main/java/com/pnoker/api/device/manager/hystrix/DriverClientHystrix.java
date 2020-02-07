/*
 * Copyright 2019 Pnoker. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.pnoker.api.device.manager.hystrix;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.pnoker.api.device.manager.feign.DriverClient;
import com.pnoker.common.bean.R;
import com.pnoker.common.dto.DriverDto;
import com.pnoker.common.model.Dic;
import com.pnoker.common.model.Driver;
import feign.hystrix.FallbackFactory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * <p>驱动 FeignHystrix
 *
 * @author pnoker
 */
@Slf4j
@Component
public class DriverClientHystrix implements FallbackFactory<DriverClient> {

    @Override
    public DriverClient create(Throwable throwable) {
        String message = throwable.getMessage() == null ? "No available server for client: DC3-MANAGER" : throwable.getMessage();
        log.error("DriverClientHystrix:{},hystrix服务降级处理", message, throwable);

        return new DriverClient() {

            @Override
            public R<Driver> add(Driver driver) {
                return R.fail(message);
            }

            @Override
            public R<Boolean> delete(Long id) {
                return R.fail(message);
            }

            @Override
            public R<Driver> update(Driver driver) {
                return R.fail(message);
            }

            @Override
            public R<Driver> selectById(Long id) {
                return R.fail(message);
            }

            @Override
            public R<Driver> selectByName(String name) {
                return R.fail(message);
            }

            @Override
            public R<Page<Driver>> list(DriverDto driverDto) {
                return R.fail(message);
            }

            @Override
            public R<List<Dic>> dictionary() {
                return R.fail(message);
            }
        };
    }
}